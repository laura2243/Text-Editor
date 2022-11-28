package textEditor.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import textEditor.api.Entity.DemoEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import textEditor.api.Repositories.RepoDemo;

import java.util.List;


@RestController
@RequestMapping("/testare")
public class Demo {


    @Autowired
    private RepoDemo repoDemo;

    @GetMapping("/test")
    public List<DemoEntity> test() {
        System.out.println(repoDemo.findAll());
        return repoDemo.findAll();
    }
}
