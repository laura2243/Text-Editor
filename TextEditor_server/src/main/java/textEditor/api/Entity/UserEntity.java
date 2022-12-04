package textEditor.api.Entity;

import lombok.*;
import textEditor.api.Model.UserModel;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "User")
public class UserEntity {

    public UserEntity(UserModel userModel){
        this.username = userModel.getUsername();
        this.email = userModel.getEmail();
        this.password = userModel.getPassword();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "username", length = 128, nullable = false)
    private String username;

    @Column(name = "email", length = 128, nullable = false)
    private String email;

    @Column(name = "password", length = 128, nullable = false)
    private String password;

}
