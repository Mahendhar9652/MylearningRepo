package http.http;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class HttpApplication {

	@Autowired
	public HttpClient http;
	public static void main(String[] args) {
		SpringApplication.run(HttpApplication.class, args);

           http.getContributors("")

	}

}
