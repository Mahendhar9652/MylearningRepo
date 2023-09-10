package userinput;

import java.util.Scanner;

public class App {

	
public static void main (String []args) {
System.out.println("Whats your name");
Scanner sc = new Scanner(System.in);
 String name = sc.next();
 sc.close();
 System.out.println("Hey there,"+name+".Have a nice day");
 
}



}
