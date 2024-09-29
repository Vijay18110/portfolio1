import React from "react";
import "./index.css";
import resume from '../../assets/vresume.pdf';

const Button = (props) => {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
          <a href="https://www.pdffiller.com/jsfiller-desk10/?flat_pdf_quality=high&mode=ref&lang=en&ref=https%3A%2F%2Fwww.pdffiller.com%2Fen%2Fforms%2Fmy_documents%3FselectItemId%3D1644027145&projectId=1644027145&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=true&jsf-fake-edit-embedded=true&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-probability-70=true&jsf-socket-io=false&routeId=f3e0a97aa52d1f071d38827ca1871733#aef0ac1b41214f998e740f50bf9d35c5" className="btn btn-primary py-4 px-5">
            {props.BtnName}
          </a>
        </div>
      </div>
    </>
  );
};

export default Button;
