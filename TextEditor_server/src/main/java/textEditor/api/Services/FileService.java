package textEditor.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import textEditor.api.Entity.FileEntity;
import textEditor.api.Entity.UserEntity;
import textEditor.api.Model.FileModel;
import textEditor.api.Repositories.FileRepo;

import javax.swing.text.TabableView;
import java.util.ArrayList;
import java.util.List;

@Component
public class FileService {
    @Autowired
    private FileRepo fileRepo;

    @Transactional
    public FileModel saveFile(FileModel newFile) {
        FileEntity newFileEntity = new FileEntity();
        newFileEntity.setUserEmail(newFile.getUserEmail());
        newFileEntity.setContent(newFile.getContent());
        newFileEntity.setFileName(newFile.getFileName());
        fileRepo.saveAndFlush(newFileEntity);
        return newFile;
    }

    @Transactional
    public List<FileModel> getFiles(String email){
        List <FileModel> list = new ArrayList<>();
        for(FileEntity e : fileRepo.findAllByUserEmail(email)){
            FileModel fm = new FileModel(e.getUserEmail(),e.getContent(),e.getFileName());
            list.add(fm);
        }
        return list;
    }


}
