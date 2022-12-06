package textEditor.api.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import textEditor.api.Entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);

    UserEntity findByUsernameAndPassword(String username, String password);

    UserEntity findByUsernameOrEmail(String username, String email);
}