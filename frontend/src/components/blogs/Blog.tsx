import { useState } from "react";
import Tag from "../common/Tag";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { faCalendar, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import BidForm from "../bids/BidForm";
import BidLists from "../bids/BidLists";

function Blog() {
  const mainBlog = useSelector(
    (state: RootState) => state.blogReducer.mainBlog
  );
  const [showBidForm, setShowBidForm] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);
  if (!mainBlog)
    return (
      <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight">
        There's no selected post.
      </h1>
    );
  return (
    <>
      <div className="text-white text-lg md:block">
        {mainBlog?.jobs_details.length &&
          mainBlog?.jobs_details
            .map((job) => job.name)
            .map((jobName) => (
              <Tag key={jobName} name={jobName} color="success" />
            ))}
      </div>
      <Tag
        icon={faMoneyBill}
        name={`${mainBlog.currency_details.sign + mainBlog.minbudget}-${
          mainBlog.maxbudget +
          " " +
          mainBlog.currency_details.code +
          (mainBlog.projIsHourly ? " per hour" : "")
        }`}
        color="danger"
      />
      <Tag
        icon={faCalendar}
        name={new Date(mainBlog?.time_submitted * 1000).toLocaleString(
          "en-us",
          { timeZone: "Europe/Paris" }
        )}
        color="info"
      />
      <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight break-words">
        {mainBlog?.title}
      </h1>
      <p
        className="text-white-100 mb-4 break-words"
        dangerouslySetInnerHTML={{
          __html: mainBlog?.appended_descr.replace(/\n/g, "<br>"),
        }}
      />
      <button
        className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
        onClick={() => {
          setShowBidForm(true);
          setCreate(false);
        }}>
        Write Bid
      </button>
      <button
        className="inline-block m-3 px-6 py-3 mt-2 rounded-md bg-red-500 text-gray-100"
        onClick={() => {
          setShowBidForm(true);
          setCreate(true);
        }}>
        Creat Sample Bid
      </button>
      {showBidForm && (
        <div className={`md:block mt-4 md:absolute z-50`}>
          <BidForm
            create={create}
            onCloseBtnClick={() => setShowBidForm(false)}
          />
        </div>
      )}
      {!create && showBidForm && <BidLists />}
    </>
  );
}

export default Blog;
