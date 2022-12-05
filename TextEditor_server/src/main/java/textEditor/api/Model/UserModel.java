package textEditor.api.Model;
import lombok.*;
import textEditor.api.Entity.UserEntity;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserModel {

    private String username;
    private String email;
    private String password;

    public UserModel(UserEntity userEntity) {
       this.username = userEntity.getUsername();
       this.email = userEntity.getEmail();
       this.password = userEntity.getPassword();
    }

}
