package actors;

import akka.actor.AbstractActor;
import akka.actor.Props;

public class HelloReceiverActor extends AbstractActor {
    public static Props props() {
        return Props.create(HelloReceiverActor.class);
    }

    @Override
    public Receive createReceive() {
        return receiveBuilder()
                .match(String.class, message -> {
                    System.out.println("Received message: " + message);
                })
                .build();
    }
}
