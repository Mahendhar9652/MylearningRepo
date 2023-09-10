public class Main {
    public static void main(String[] args) {
        // Loop through numbers 1 to 100
        for (int i = 1; i <= 100; i++) {
            // Check if the number is divisible by 2 and 3
            if (i % 2 == 0 && i % 3 == 0) {
                System.out.println("The number " + i + " is divisible by 2 and 3");
            }
            // Check if the number is divisible by 3
            else if (i % 3 == 0) {
                System.out.println("The number " + i + " is divisible by 3");
            }
            // Check if the number is even
            else if (i % 2 == 0) {
                System.out.println("The number " + i + " is even");
            }
            // If not divisible by 2 or 3, the number is odd
            else {
                System.out.println("The number " + i + " is odd");
            }
        }
    }
}
