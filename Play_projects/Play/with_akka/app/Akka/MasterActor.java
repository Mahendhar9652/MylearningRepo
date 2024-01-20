package Akka;

import akka.actor.AbstractActor;
import akka.actor.Props;
import org.apache.pekko.http.javadsl.model.FormData;

public class MasterActor extends AbstractActor {

    public static Props props() {
        return Props.create(MasterActor.class);
    }
    @Override
    public Receive createReceive() {
        return receiveBuilder()
                .match(FormData.class, data -> {
                    // Forward form data to a worker
                    context().actorSelection("/user/worker")
                            .forward(data, getContext());
                })
                .build();
    }
}
