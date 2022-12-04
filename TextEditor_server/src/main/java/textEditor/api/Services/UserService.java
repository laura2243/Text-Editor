package textEditor.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import textEditor.api.Entity.UserEntity;
import textEditor.api.Model.UserModel;
import textEditor.api.Repositories.UserRepo;
@Component
public class UserService {

    @Autowired
    private UserRepo userRepo;
    public UserModel signUp(UserModel userModel){


        if(userRepo.findByUsername(userModel.getUsername())==null){
           userRepo.saveAndFlush(new UserEntity(userModel));
        }
       return userModel;
    }
    public UserModel logIn(UserModel userModel){

        if(userRepo.findByUsername(userModel.getUsername())!=null){


        }
        return null;
    }


}