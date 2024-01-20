package ffmpeg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UploadController {

    @Autowired
    private FfmpegService ffmpegService;


    @PostMapping("/transcode")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<String> transcode(
            @RequestParam("input") MultipartFile inputFile,
            @RequestParam("output") String outputFile) throws IOException, InterruptedException {

        ffmpegService.transcode(String.valueOf(inputFile), outputFile);
        return ResponseEntity.ok("Transcoding complete!");
    }

    @GetMapping("/message")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public String getMessage() {
        return "Hello from the backend!";
    }}