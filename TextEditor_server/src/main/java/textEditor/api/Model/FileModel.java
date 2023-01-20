package textEditor.api.Model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class FileModel {
    String userEmail;
    String content;
    String fileName;
}
