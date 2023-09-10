package interfaces;

import interfaces.phone.Oneplus5;

public class hello {

	public static void main(String[] args) {
	Oneplus5 phone = new Oneplus5();
	int processor = phone.processor();
	System.out.println("processor:"+processor);

	}

}
