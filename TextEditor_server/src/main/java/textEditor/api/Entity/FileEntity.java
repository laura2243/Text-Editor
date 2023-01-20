package textEditor.api.Entity;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "files")
public class FileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "user_email", length = 128, nullable = false)
    private String userEmail;

    @Column(name = "content")
    private String content;

    @Column(name = "file_name", nullable = false)
    private String fileName;


}
