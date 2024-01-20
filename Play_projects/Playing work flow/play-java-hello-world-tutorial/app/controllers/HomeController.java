package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.*;


public class HomeController extends Controller {

    public Result index(String name) {
        // return redirect("/user/home");

        // return ok("It works!");

        // return redirect(controllers.routes.HomeController.navigate());

//        response().setContentType("text/html; charset=iso-8859-1");

        return ok("<h1>Hello World!</h1>").as("text/html; charset=iso-8859-1");

    }

//    public Result session() {
//        String user = session().get("connected");
//        if (user != null) {
//            return ok("Hello " + user);
//        } else {
//            return unauthorized("Oops, you are not connected");
//        }
//    }

    public Result navigate() {
        return ok("Navigated");
    }

//    public  Result session() {
//        Http.RequestBody body = request().body();
//        return ok("Got body: " + body);
//    }

//
//    public Result show() {
//        String url = "https://example.com"; // Replace with your actual URL or logic to obtain it
//        return ok(chatRoom.render(url, webJarsUtil));
//    }




}
