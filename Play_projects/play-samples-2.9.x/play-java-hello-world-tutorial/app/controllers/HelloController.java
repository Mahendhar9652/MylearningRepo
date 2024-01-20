package controllers;

import actors.HelloReceiverActor;
import actors.HelloSenderActor;
import akka.actor.ActorRef;
import akka.actor.ActorSystem;
import play.mvc.Controller;
import play.mvc.Result;
import javax.inject.Inject;

public class HelloController extends Controller {
    private final ActorSystem actorSystem;
    private final ActorRef senderActor;
    private final ActorRef receiverActor;

    @Inject
    public HelloController(ActorSystem actorSystem) {
        this.actorSystem = actorSystem;
        this.receiverActor = actorSystem.actorOf(HelloReceiverActor.props(), "helloReceiver");
        this.senderActor = actorSystem.actorOf(HelloSenderActor.props(receiverActor), "helloSender");
    }

    public Result sayHello(String name) {
        senderActor.tell(name, ActorRef.noSender());
        return ok("Message sent to actor system. Check the console for the received message.");
    }

}