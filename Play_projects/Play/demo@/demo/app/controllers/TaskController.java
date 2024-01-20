package controllers;

import play.mvc.*;
import play.data.Form;
import models.Task;
import views.html.*;

import javax.inject.Inject;
import java.util.List;

public class TaskController extends Controller {

    private final Form<Task> taskForm;

    @Inject
    public TaskController(FormFactory formFactory) {
        this.taskForm = formFactory.form(Task.class);
    }

    public Result index() {
        List<Task> tasks = Task.find.all();
        return ok(index.render(tasks, taskForm));
    }

    public Result create() {
        Form<Task> filledForm = taskForm.bindFromRequest();
        if (filledForm.hasErrors()) {
            return badRequest(index.render(Task.find.all(), filledForm));
        }

        Task task = filledForm.get();
        task.save();

        return redirect(routes.TaskController.index());
    }

    public Result toggleTask(Long id) {
        Task task = Task.find.byId(id);
        if (task != null) {
            task.completed = !task.completed;
            task.save();
        }
        return redirect(routes.TaskController.index());
    }

    public Result deleteTask(Long id) {
        Task task = Task.find.byId(id);
        if (task != null) {
            task.delete();
        }
        return redirect(routes.TaskController.index());
    }
}
