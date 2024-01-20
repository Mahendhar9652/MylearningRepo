package controllers;

import akka.actor.ActorRef;
import akka.actor.ActorSystem;
import play.mvc.Controller;
import play.mvc.Result;
import Akka.MasterActor;

import java.util.Map;

public class HomeController extends Controller {

    private final ActorSystem actorSystem = ActorSystem.create();
    private final ActorRef masterActor = actorSystem.actorOf(MasterActor.props(), "master");

    public Result submitForm() {
        // Assuming you have a method to extract form data
        Map<String, String[]> formData = extractFormDataFromRequest(request());

        // Process the form data as needed
        String value = formData.get("key")[0]; // Adjust "key" based on your form field name

        // Now you can use 'value' or process the form data further

        // Change "this" to "ActorRef.noSender()" to avoid sending the response to the current actor
        masterActor.tell(value, ActorRef.noSender());

        return ok("Form submitted");
    }

    private Map<String, String[]> extractFormDataFromRequest(play.mvc.Http.Request request) {
        // Implement a method to extract form data based on your specific requirements
        // This can involve parsing the request body or using a library that suits your needs
        // Return a Map<String, String[]> representing the form data
        // For simplicity, you may want to adapt this according to your actual use case
        return request.body().asFormUrlEncoded();
    }

    public Result index() {
        return ok(views.html.index.render());
    }
}
