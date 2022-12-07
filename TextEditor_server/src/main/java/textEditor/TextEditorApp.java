package textEditor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import textEditor.api.Model.EmailEvent;
import textEditor.api.Services.EmailSenderService;
;

@SpringBootApplication
public class TextEditorApp {

    @Autowired
    private EmailSenderService emailSenderService;

    public static void main(String[] args) {
        SpringApplication.run(TextEditorApp.class, args);

    }

    @EventListener
    public void sendMail(EmailEvent emailEvent)
    {
        emailSenderService.sendSimpleEmail(emailEvent.getToEmail(), emailEvent.getSubject(), emailEvent.getBody());
    }

}
