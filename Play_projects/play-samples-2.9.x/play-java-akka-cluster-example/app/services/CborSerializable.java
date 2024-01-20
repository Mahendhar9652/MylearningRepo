package services;

/**
 * Marker trait for serialization with Jackson CBOR.
 * Enabled in serialization.conf `akka.actor.serialization-bindings` (via application.conf).
 *
 * See also https://doc.akka.io/docs/akka/2.6/serialization-jackson.html#introduction
 */
public interface CborSerializable {
}
