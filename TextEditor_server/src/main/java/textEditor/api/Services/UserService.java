package textEditor.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import textEditor.api.Entity.UserEntity;
import textEditor.api.Model.UserModel;
import textEditor.api.Repositories.UserRepo;
@Component
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Transactional
    public UserModel signUp(UserModel userModel){

            UserEntity userEntity = new UserEntity();
            userEntity.setEmail(userModel.getEmail());
            userEntity.setUsername(userModel.getUsername());
            userEntity.setPassword(userModel.getPassword());
           userRepo.saveAndFlush(userEntity);
       return userModel;
    }
    public UserModel logIn (UserModel userModel) throws Exception {

        try {
        if(userRepo.findByUsernameAndPassword(userModel.getUsername(), userModel.getPassword())!=null){
            return userModel;

        }
        } catch (Exception e){
            throw  new Exception("Username or password incorrect");
        }

    return null;
    }


}