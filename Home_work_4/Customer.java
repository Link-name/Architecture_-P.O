public class Customer {

        private int id;
        private Ticket[] tickets;
        private CashProvider cashProvider;
    
       
        public  boolean buy(Ticket ticket) {
            return false;
        }
        
        public boolean repealTicket(Ticket ticket){
            return true;
        }
        public Ticket[] searchTicket(int rootNumber){
            return new Ticket[0];
        }
}
