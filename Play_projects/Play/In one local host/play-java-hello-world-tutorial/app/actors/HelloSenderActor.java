package actors;

import akka.actor.AbstractActor;
import akka.actor.ActorRef;
import akka.actor.Props;

public class HelloSenderActor extends AbstractActor {
    private final ActorRef receiver;

    public HelloSenderActor(ActorRef receiver) {
        this.receiver = receiver;
    }

    public static Props props(ActorRef receiver) {
        return Props.create(HelloSenderActor.class, () -> new HelloSenderActor(receiver));
    }

    @Override
    public Receive createReceive() {
        return receiveBuilder()
                .match(String.class, message -> {
                    receiver.tell("Hello, " + message, getSelf());
                })
                .build();
    }
}
