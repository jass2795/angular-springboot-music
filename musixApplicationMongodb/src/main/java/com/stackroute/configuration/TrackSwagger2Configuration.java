package com.stackroute.configuration;

import com.stackroute.domain.Track;
import com.stackroute.repository.TrackRepository;
import io.swagger.annotations.Contact;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class TrackSwagger2Configuration {

    @Bean
    public Docket apiDocket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.stackroute.controller"))
                .paths(regex("api/v1/*"))
                .build();

    }
//    private ApiInfo metaData() {
//        ApiInfo apiInfo = new ApiInfo(
//                "Spring Boot REST API",
//                "Spring Boot REST API for Online Store",
//                "1.0",
//                "Terms of service",
//                new Contact("John Thompson", "https://springframework.guru/about/", "john@springfrmework.guru"),
//                "Apache License Version 2.0",
//                "https://www.apache.org/licenses/LICENSE-2.0");
//        return apiInfo;
//    }
}
