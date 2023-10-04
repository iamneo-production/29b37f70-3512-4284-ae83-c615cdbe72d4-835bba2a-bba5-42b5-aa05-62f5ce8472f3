import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Forget from './components/Forgot';
import Loginpage from './Component/Login';
import SignUpPage from './Component/Signup';
import Dashboard from './Component/Dashboard';
import Forget from './Component/Forgot';
import PrivacyPolicy from './Component/privacy';
import TermsAndConditions from './Component/Terms and condition';
import AddressForm from './Component/AddressForm';
import Checkout from './Component/Checkout';
import PaymentForm from './Component/PaymentForm';
import Review from './Component/Review';
import OrderManagementPage from './Component/Order';
import PerfumeManagementPage from './Component/FragranceManagement';
import CustomerManagementPage from './Component/CustomerManagement';
import FaqPage from './Component/Faq';
import HomePage from './Component/Home';
import TransactionManagementPage from './Component/TransactionManagement';
import ResponsiveAppBar from './Component/Home';
import Custom from './Component/custom';
import Output from './Component/Product';
import SelectFlavours from './Component/SelectFlavours';
import Proportion from './Component/Proportion';
import OutputPage from './Component/Product';
import ProductOutput from './Component/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<Forget />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/policy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route path="/address" element={<AddressForm/>} />
        <Route path="/out" element={<Checkout/>} />
        <Route path="/pay" element={<PaymentForm/>} />
        <Route path="/rev" element={<Review/>} />
        <Route path="/order" element={<OrderManagementPage/>} />
        <Route path="/fragrance" element={<PerfumeManagementPage/>} />
        <Route path="/customer" element={<CustomerManagementPage/>} />
        <Route path="/faq" element={<FaqPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/transaction" element={<TransactionManagementPage/>} />
        <Route path="/home" element={<ResponsiveAppBar/>} />
        <Route path="/custom" element={<Custom/>} />
        <Route path="/select" element={<SelectFlavours/>} />
        <Route path="/proportion" element={<Proportion/>} />
        <Route path="/product" element={<ProductOutput/>} />
      </Routes>
    </Router>
  );
}

export default App;