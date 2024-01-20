package ffmpeg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class FfmpegService {

    @Autowired
    private ProcessBuilder processBuilder;

    public void transcode(String inputFile, String outputFile) throws IOException, InterruptedException {
        ProcessBuilder builder = new ProcessBuilder("ffmpeg", "-i", inputFile, outputFile);
        Process process = builder.start();
        process.waitFor();
    }
}