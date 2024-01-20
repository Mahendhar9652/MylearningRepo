package http.http;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "Demo", url = "http://localhost:4200/resources")
public interface HttpClient {

    @GetMapping("/contributors")
    List<String> getContributors(
            @RequestHeader("Cookie") String cookie,
            @RequestParam("businessUnit") String businessUnit,
            @RequestParam("fullName") String fullName
    );
}
