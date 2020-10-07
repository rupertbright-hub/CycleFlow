import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Nav from '../Nav/Nav';

const councils = {
  'Barking and Dagenham': '@lbbdcouncil',
  Camden: '@CamdenCouncil',
  Croydon: '@yourcroydon',
  Hackney: '@hackneycouncil',
  'Hammersmith and Fulham': '@LBHF',
  Islington: '@IslingtonBC',
  Lambeth: '@lambeth_council',
  Lewisham: '@LewishamCouncil',
  Westminster: '@CityWestminster',
};

function TweetForm() {
  const initialState = {
    type: '',
    date: '',
    incident: '',
    council: '',
    urgency: '',
    postcode: '',
  };

  const [form, setForm] = useState(initialState);
  const [postcode, setPostcode] = useState([]);
  const [toggle, setToggle] = useState('true');

  console.log(form);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.postcodes.io/postcodes/ ${form.postcode}`)
      .then((res) => res.json())
      .then((postcode) => setPostcode(postcode));
    diffPostcode(postcode);
  }

  function handleChange(e) {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function addCouncil(postcode) {
    let newVal = postcode.result;
    for (let i in newVal) {
      if (i === 'admin_district') {
        return newVal[i];
      }
    }
  }

  //   function clearForm () {
  //       setTimeout(function () { setForm(initialState);}, 1000)
  //       console.log('hello')
  //   }

  function refreshPage() {
    setTimeout(function () {
      window.location.reload(true);
    }, 1000);
  }

  const diffPostcode = (postcode) => {
    let selection = '';
    let newVal = postcode.result;
    for (let i in newVal) {
      if (i === 'primary_care_trust') {
        selection = newVal[i];
      }
    }
    for (const [key, value] of Object.entries(councils)) {
      if (key === selection) {
        return value;
      }
    }
  };

  let councilhandle = diffPostcode(postcode);

  const toggler = () => {
    setToggle(false);
  };

  return (
    <div>
      <Nav className="" />
      <div className="flex justify-center">
        <div className="m-16">
          <form name="form" onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Report Type
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  name="type"
                  type="text"
                  value={form.type}
                  placeholder="name"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Report Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="date"
                  type="date"
                  value={form.date}
                  placeholder="*****"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 mt-12">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Incident
                </label>
                <textarea
                  className="h-32 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="incident"
                  type="text"
                  onChange={handleChange}
                  value={form.incident}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2 mt-12">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Postcode
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="postcode"
                  type="text"
                  onChange={handleChange}
                  value={form.postcode}
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Urgency
                </label>
                <div className="relative">
                  <select
                    name="urgency"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={form.urgency}
                  >
                    <option></option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className={`${
                    toggle ? 'text-gray-200' : 'text-gray-900'
                  } block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2`}
                >
                  Council
                </label>
                <input
                  name="council"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder=""
                  onChange={handleChange}
                  value={addCouncil(postcode)}
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex mt-6">
              <div>
                <button
                  onClick={toggler}
                  className={`${
                    toggle
                      ? 'bg-blue-500'
                      : 'bg-blue-500 opacity-25 cursor-not-allowed'
                  } hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mt-8 mb-0"`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="ml-auto">
                <a
                  href={`http://twitter.com/intent/tweet?text=${councilhandle} ${form.incident} London via @InspectorRoute`}
                >
                  <button
                    onClick={() => refreshPage()}
                    className={`${
                      toggle
                        ? 'bg-blue-500 opacity-25 cursor-not-allowed'
                        : 'bg-blue-500 animate-bounce'
                    } hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mt-8 w-64 right-0`}
                  >
                    <FontAwesomeIcon className="mr-3" icon={faTwitter} />
                    Share on Twitter
                  </button>
                </a>
              </div>
            </div>
            {
              <div className="">
                {toggle ? (
                  ''
                ) : (
                  <div className="bg-gray-200 rounded-md mt-8 border-2 font-bold border-blue-500 p-8 transition">
                    We have automatically populated the tweet, we have added the
                    relevant councils Twitter username based on the postcode you
                    provided. 😇
                  </div>
                )}
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default TweetForm;
