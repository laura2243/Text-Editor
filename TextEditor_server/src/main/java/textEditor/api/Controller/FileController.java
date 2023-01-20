package textEditor.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import textEditor.api.Model.FileModel;
import textEditor.api.Model.UserModel;
import textEditor.api.Services.FileService;

import java.util.List;

@RestController
@RequestMapping("/file")
public class FileController {

    @Autowired
    FileService fileService;

    @PostMapping("/save")
    public FileModel saveFile(@RequestBody FileModel newFile) {
        System.out.println("aici");
        System.out.println(newFile);
        return fileService.saveFile(newFile);
    }

    @GetMapping("/files")
    @ResponseBody
    public List<FileModel> getFile(@RequestBody String user) {
        System.out.println(user);
        return fileService.getFiles(user);
    }
}
