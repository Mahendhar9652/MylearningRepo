package Akka;


import akka.actor.AbstractActor;
import org.apache.pekko.http.javadsl.model.FormData;

public class WorkerActor extends AbstractActor {
    @Override
    public AbstractActor.Receive createReceive() {
        return receiveBuilder()
                .match(FormData.class, data -> {
                    // Process the form data
                    System.out.println("Received form data: " + data);
                })
                .build();
    }
}
