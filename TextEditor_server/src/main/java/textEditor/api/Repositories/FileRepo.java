package textEditor.api.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import textEditor.api.Entity.FileEntity;

import java.io.File;
import java.util.List;

public interface FileRepo extends JpaRepository<FileEntity, Long> {
    List<FileEntity> findAllByUserEmail(String email);

}
