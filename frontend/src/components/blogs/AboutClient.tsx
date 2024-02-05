import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faClock,
  faCreditCard,
  faInbox,
  faMapMarkerAlt,
  faMessage,
  faPhone,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutClient() {
  const mainBlog = useSelector(
    (state: RootState) => state.blogReducer.mainBlog
  );
  if (!mainBlog) return <></>;
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="text-center mt-12 px-6">
          <div className="flex justify-center items-center">
            <img
              alt="..."
              width={100}
              src={"https://www.freelancer.com" + mainBlog?.avatar}
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
          <h3 className="text-xl font-semibold leading-normal mb-2 mt-12">
            {mainBlog?.username}
          </h3>
          <div className="text-md leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {mainBlog?.location.city}
          </div>
          <div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <img
              src={"https://www.freelancer.com/" + mainBlog?.location.flag_url}
            />
            &nbsp;{mainBlog?.location.country}
          </div>
          <div className="flex justify-center items-center text-md leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;
            <div className="flex items-center">
              {mainBlog?.overallReputation
                ? [1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={"star" + index}
                      className={`w-5 h-5 text-${
                        index <=
                        Number(mainBlog?.overallReputation.toExponential(1))
                          ? "yellow"
                          : "gray"
                      }-400`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))
                : [1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={"star" + index}
                      className={`w-5 h-5 text-gray-400`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
            </div>
            &nbsp;{` ${mainBlog?.overallReputation.toFixed(1)} `}&nbsp;
            <FontAwesomeIcon icon={faMessage} />
            &nbsp;{mainBlog?.reviews}
          </div>
          <div className="text-md leading-normal mt-0 mb-2 font-bold uppercase">
            <FontAwesomeIcon icon={faClock} />{" "}
            {mainBlog?.registration_date &&
              new Date(mainBlog?.registration_date * 1000).toLocaleString()}
          </div>
          <div className="mb-2 mt-10">
            <p className="text-lg font-bold">Client Verification</p>
            <div className="text-left pl-24">
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.identity_verified ? "green" : "gray"}
                  icon={faAddressCard}
                />
                &nbsp; Identity verified
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.payment_verified ? "green" : "gray"}
                  icon={faSackDollar}
                />
                &nbsp; Payment verified
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.deposit_made ? "green" : "gray"}
                  icon={faCreditCard}
                />
                &nbsp; Deposit made
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.email_verified ? "green" : "gray"}
                  icon={faInbox}
                />
                &nbsp; Email verified
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.profile_complete ? "green" : "gray"}
                  icon={faUser}
                />
                &nbsp; Profile Completed
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  color={mainBlog?.status.phone_verified ? "green" : "gray"}
                  icon={faPhone}
                />
                &nbsp; Phone verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
