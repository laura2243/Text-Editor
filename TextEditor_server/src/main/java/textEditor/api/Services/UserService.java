package textEditor.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.function.EntityResponse;
import textEditor.api.Entity.UserEntity;
import textEditor.api.Model.EmailEvent;
import textEditor.api.Model.UserModel;
import textEditor.api.Repositories.UserRepo;

import javax.security.auth.login.LoginException;
import java.util.List;

@Component
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private EmailSenderService emailSenderService;
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;

    @Transactional
    public UserModel signUp(UserModel userModel) {

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userModel.getEmail());
        userEntity.setUsername(userModel.getUsername());
        userEntity.setPassword(userModel.getPassword());
        userRepo.saveAndFlush(userEntity);
        return userModel;
    }

    @Transactional
    public UserModel logIn(UserModel userModel) throws Exception {


        if (userRepo.findByUsernameAndPassword(userModel.getUsername(), userModel.getPassword()) != null) {
            return userModel;

        } else {
            throw new Exception("Username or password incorrect");
        }

    }

    public UserModel forgotPassword(UserModel userModel) throws Exception {

        UserEntity userEntity = userRepo.findByUsernameOrEmail(userModel.getUsername(), userModel.getEmail());

        if (userEntity != null) {
            EmailEvent emailEvent = new EmailEvent(this, userEntity.getEmail(), "Forgot Password", userEntity.getPassword());
            applicationEventPublisher.publishEvent(emailEvent);
        } else {
            throw new Exception("Invalid username/email");
        }
        return userModel;
    }

    public List<String> getAllMails() {
        return userRepo.findAll().stream().map(user->user.getEmail().toLowerCase()).toList();
    }

    public List<String> getAllUsernames() {
        return userRepo.findAll().stream().map(user->user.getUsername().toLowerCase()).toList();
    }

}