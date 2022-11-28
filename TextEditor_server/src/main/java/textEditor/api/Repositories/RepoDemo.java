package textEditor.api.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import textEditor.api.Entity.DemoEntity;

@Repository
public interface RepoDemo extends JpaRepository<DemoEntity, Long> {

}