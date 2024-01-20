package models;

import javax.persistence.*;
import io.ebean.Model;

@Entity
public class Task extends Model {
    @Id
    public Long id;

    @Column(nullable = false)
    public String title;

    public boolean completed;

    public static Finder<Long, Task> find = new Finder<>(Task.class);
}
