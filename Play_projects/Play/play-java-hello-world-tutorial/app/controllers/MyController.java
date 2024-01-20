package controllers;

import akka.actor.ActorRef;
import akka.actor.ActorSystem;
import akka.actor.Props;
import javax.inject.Inject;
import play.mvc.Controller;
import play.mvc.Result;

public class MyController extends Controller {
    public Result index() {
        return ok(views.html.index.render());
    }
}
