package textEditor.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import textEditor.api.Entity.UserEntity;
import textEditor.api.Model.UserModel;
import textEditor.api.Repositories.UserRepo;
import textEditor.api.Services.UserService;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signUp")
    public UserModel signUp(@RequestBody UserModel userModel){
        return userService.signUp(userModel);
    }

    @PostMapping("/logIn")
    public UserModel logIn(@RequestBody UserModel userModel) throws Exception {
        return userService.logIn(userModel);
    }

    @PostMapping("/forgotPassword")
    public UserModel forgotPassword(@RequestBody UserModel userModel)  throws Exception {
        return userService.forgotPassword(userModel);
    }

}
