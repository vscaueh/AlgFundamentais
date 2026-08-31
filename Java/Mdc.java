public class Mdc {

    public static int mdc(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    public static void main(String[] args) {
        int a = 48;
        int b = 18;

        System.out.println("--- Maximo Divisor Comum ---");
        System.out.println("MDC(" + a + ", " + b + ") = " + mdc(a, b));
    }
}