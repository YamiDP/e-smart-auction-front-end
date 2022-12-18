import { WrapperContent } from "../../Elements/WrapperContent";
import { IntroProduct } from "./ContentElements/IntroProduct";
import { LastAuction } from "./ContentElements/LastAuctions";
import { LastNew } from "./ContentElements/LastNew";
import { ListBranch } from "./ContentElements/ListBranch";
import { ListProduct } from "./ContentElements/ListProduct";
import { Service } from "./ContentElements/Services";
import { useMemo, useEffect} from "react";
import { useLocation , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if(state)
    toast(state.message);
    navigate(location.pathname, {}); 
  }, []); // Or [] if effect doesn't need props or state
  return (
    <WrapperContent>
       <ToastContainer />
      <Service />
      <LastAuction />
      <div className="vc_row-full-width vc_clearfix"></div>
      <IntroProduct />
      <div className="vc_row-full-width vc_clearfix"></div>
      <ListProduct />
      <div className="vc_row-full-width vc_clearfix"></div>
      <LastNew />
      <div className="vc_row-full-width vc_clearfix"></div>
      <ListBranch />
      <div className="vc_row-full-width vc_clearfix"></div>
      <div className="clearfix"></div>
    </WrapperContent>
  );
};
