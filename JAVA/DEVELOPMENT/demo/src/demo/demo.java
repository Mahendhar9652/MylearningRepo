package demo;
import java.io.*;
import java.time.LocalDate;

import java.time.LocalTime;

import java.util.Scanner;
import java.util.Calendar;


import java.util.Date;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;



/*class Animal {
	
	void printA() {
	System.out.println("animals is runing");
}
}




class Dog extends Animal {
	
	void printD() {
	System.out.println("dog is barking");
}
}
*/
/*interface Printable{
	void print();
	int a=20;
}
interface Showable{
	void show();
}*/



public class demo {
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	/*public void run() {
		System.out.println("threads");
	}
	
	
	

	/*public void print() {
		System.out.println("print");
	}
	
	public void show() {
		System.out.println("show");	
	
	
	}
	
	
	/*private int age;
	private String name;
	
	public String getName() {
		return name;
	}
	public void  setName(String n) {
		this.name= n; 
	}
	

	public String getAge() {
		return name;
	}
	public void  setAge(int n) {
		this.age= n; 
	}
	*/
 
	/*int a ;
	String b;
	
	
	demo(int c , String d){
		a =c;
		b=d;
	}*/
	
	//final int x =25;
	/*static void  r() {
		System.out.println("hello");
		r();
	}*/
	
	/*static int multiply (int a) {
		
		System.out.println(a * 5);
		return a * 5;
		
	}*/
	/*static int add(int a ,int b) {
		return a + b;
	}
	static int add(int a ,int b ,int c) {
		return a + c;
	}
	*/
	
	public static void main(String[] args) {
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/* File myFile = new File("D:\\Test.txt");
		 if(myFile.exists()) {
			 System.out.println(myFile.getName());
			 System.out.println(myFile.getAbsolutePath());
			 System.out.println(myFile.length());
			 System.out.println(myFile.canRead());
			 System.out.println(myFile.canWrite());
		 }else {
			 System.out.println("file is not there");
		 }
		 
	
		
		
		/*try {
		     File myFile = new File("D:\\Test.txt");
		     if(myFile.createNewFile()) {
		    	 System.out.println("file created");
		     }else {
		    	 System.out.println("file already exist");
		    	 
		     }
		   
			}catch(Exception e) {
				System.out.println("eeore occured"+e);
			}
			
		
		
		/*ArrayList<Object> arrayList = new ArrayList<Object>();
		
		arrayList.add(1);
		arrayList.add("Mahendhar");
		
	arrayList.forEach(x->System.out.println(x));

		 
		/*demo t =new demo();
		t.start();
	
		
		
		/*demo i = new demo();
		i.print();
		i.show();
		System.out.println(i.a);
		
	
		
		/*try {
			//int d =10/0;
			System.out.println("hello");
		}
		catch(Exception e) {
			System.out.println(e);
			System.out.println("hello");
			
		}finally {
			System.out.println("Executed");
		}
		System.out.println("hello");
		
		
		
		/*ArrayList<Integer> score = new ArrayList<Integer>();
		score.add(455);
		score.add(454);
		score.add(45);
		score.add(455);
		score.add(455);
		score.add(4585);
	  Iterator<Integer> it  = score.iterator();
	  while(it.hasNext()) {
			System.out.println(it.next());
			  
	  }
		/*HashSet<String> score = new HashSet<String>();
		
		score.add("mahi");
		score.add("mahi");
		score.add("virat");
		score.add("hello");
		System.out.println(score);
		
     	/*HashMap<String ,Integer> employee = new HashMap<String,Integer>();
		 employee.put("mahi", 15000);
		 employee.put("harish", 15000);
		 employee.put("hari", 15000);
		 System.out.println(employee);
		 for(String salary :employee.keySet()) {
			 System.out.println(salary);
		 }
		
/*	LinkedList<Integer> score = new LinkedList<Integer>();
		
		score.add(45);
		score.add(45);
		score.add(45);
		score.add(55);
		score.remove(3);
		score.set(0,105);
		System.out.println(score);

		/*ArrayList<Integer> score = new ArrayList<Integer>();
		
		score.add(45);
		score.add(45);
		score.add(45);
		score.add(55);
		score.remove(3);
		score.set(0,105);
		System.out.println(score);
		
		/*LocalDate date1 = LocalDate.now();
		LocalTime time1 =LocalTime.now();
		
		Date d = new Date();
		
		Calendar cal =new Calendar.getInstance();
		
		System.out.println(time1);
		System.out.println(date1);
		System.out.println(d);
		System.out.println(cal.getTime());
		
		
		
		
		/*Scanner sc = new Scanner(System.in);
		System.out.println("Enter Your Roll No:");
		int rollno =sc.nextInt();
		System.out.println("Enter Your Name:");
		String name =sc.next();
		System.out.println("Enter Your Fee:");
		int fee =sc.nextInt();
		System.out.println("Your Details:"+rollno +name+fee);
		sc.close();
		
		/*Dog obj = new Dog();
		obj.printD();
		obj.printA();
		
		/*demo obj = new demo(45 ,"mahendhar");

		System.out.println(obj.a +obj.b);

		/*demo obj1 = new demo();
		demo obj2 = new demo();
		System.out.println(obj1.x);

		System.out.println(obj2.x);*/

		
		/*for(int i =0;i<=10 ;i++) {
			multiply(i);
		}*/
		
		/*int a =20;
		System.out.println(a);
		float  b = 20;
		System.out.println(b);
		float d =33.9f;
		System.out.println(d);
		int c=(int)d;
		System.out.println(c);
		char e ='A';
		e =66;
		System.out.println(e);
		int myInt =9;
		double myDouble =myInt;
		System.out.println(myDouble);
		double mys =9.78f;
		int ddd =(int)mys;
		System.out.println(ddd);
		int a=9, b=9;
		System.out.println(a+b);
		System.out.println(a-b);
		System.out.println(a*b);
		System.out.println(a/b;
		System.out.println(a%b);	
		boolean a =true;
		System.out.println(!a);
		int a =10 ,b=15 ,c =2 ,d=5;
		System.out.println(a>=b);
		System.out.println(a==c);
		System.out.println(a!=d);
		System.out.println(b<c);
		int a ;
		System.out.println(a=5);
		System.out.println(a+=10);
		System.out.println(a*=3);
		int a =5 ,b =3,c=4;
		System.out.println(a>b && a>c );
		System.out.println(a>b || a>c );
		int a =10 ,b=15;
		int max = (a>b)?a:b;
		System.out.println(max);
		String s="skylab";
		String v =new String("mahi");
		System.out.println(s);
		System.out.println(v);
		System.out.println(Math.min(36,1));
		System.out.println(Math.max(36,1));
		System.out.println(Math.sqrt(36));
		System.out.println(Math.abs(-5.7));
		System.out.println(Math.random()*1000);
		System.out.println(Math.ceil(5.6));
		System.out.println(Math.floor(5.6));
		System.out.println(Math.pow(5,6));s
		boolean d = false;
		System.out.println(d);
		
		
		
		int a =30;
		if(a>40) {
			System.out.println("its greater thane 40");
			
		}else if(a>30) {
			System.out.println("its greater thane 30");
		}else {
			System.out.println("its less than 30");
		}
		
		int a =4;
		 switch (a){
			 case 1 :
					System.out.println("your entered number 1");
			 break;
		    case 2 :
			  System.out.println("your entered number 2");
			  		 break;

		    case 3 :
			  System.out.println("your entered number 3");
			  		 break;

		    case 4 :
			  System.out.println("your entered number 4");
			  		 break;

		    case 5 :
			  System.out.println("your entered number 5");
			  		 break;
			  		 default :
			  			System.out.println("your entered more thean 5");
			  			break;
			  			 
			 
		 }
		int a =0;
		while (a<=5) {
			System.out.println("your number s  " + a);
			a++;
		}
		
		
		for(int a =5;a<=5;a++) {
			System.out.println("your  number 5 "+a);
		}
		
		int a [] =new int[5];
	    Scanner sc = new Scanner(System.in);
		
		for(int i =0;i<a.length;i++) {
		
		System.out.println(a[i]);
		}*/
	
		
		}

}