public class CashProvider {
    private long card;
    private boolean isAuthorization;

   
    public  boolean buy(int price) {
        return false;
    }
  
    public boolean repealTicket(int price){
        return true;
    }

    public void authorization(Customer customer){
        this.isAuthorization = true;
    }
    
}
