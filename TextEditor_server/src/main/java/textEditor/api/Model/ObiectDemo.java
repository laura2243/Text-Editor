package textEditor.api.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ObiectDemo {
    private String field;

    public ObiectDemo(String field) {
        this.field = field;
    }
}
