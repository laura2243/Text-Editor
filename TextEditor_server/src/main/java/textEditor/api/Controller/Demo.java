package textEditor.api.Controller;

import textEditor.api.Model.ObiectDemo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/testare")
public class Demo {


    @GetMapping("/test")
    public ObiectDemo test() {
        return new ObiectDemo("Pressed");
    }
}
