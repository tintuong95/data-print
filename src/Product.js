import React from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useParams, Link } from "react-router";
import { useGlobalContext } from "./GlobalContext";

function Product(props) {
  const { id } = useParams();

  const { data } = useGlobalContext();
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // Lấy dữ liệu sản phẩm từ global context
  const productData = data[id] || [];
    console.log(productData)

  return (
    <>
      <div>
        <Link to="/">Back</Link>
        <button onClick={reactToPrintFn}>Print</button>
      </div>
      <div class="page" ref={contentRef}>
        <div class="label">
          <div class="title">STHB1913 /{productData[13] || ""}</div>

          <div class="row">Made In Vietnam</div>
          <div class="row">
            Style No : <span class="value">{productData[4] || ""}</span>
          </div>
          <div class="row">
            PO No : <span class="value">{productData[5]}</span>
          </div>
          <div class="row">
            PO No : <span class="value">{productData[5] || ""}</span>
            Dimensions : <span class="value">{productData[18] || ""}</span>
          </div>

          <div class="row weight">
            <div>Weight:</div>
            <div>{"Kg"}</div>
          </div>

          <div class="footer">{productData[4] + "/ " + productData[3]}</div>
        </div>
         <div class="label">
          <div class="title">STHB1913 /{productData[13] || ""}</div>

          <div class="row">Made In Vietnam</div>
          <div class="row">
            Style No : <span class="value">{productData[4] || ""}</span>
          </div>
          <div class="row">
            PO No : <span class="value">{productData[5]}</span>
          </div>
          <div class="row">
            PO No : <span class="value">{productData[5] || ""}</span>
            Dimensions : <span class="value">{productData[18] || ""}</span>
          </div>

          <div class="row weight">
            <div>Weight:</div>
            <div>{"Kg"}</div>
          </div>

          <div class="footer">{productData[4] + "/ " + productData[3]}</div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {};

export default Product;
