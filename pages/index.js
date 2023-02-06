import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import coverImg from "../public/img/cover-img.jpg";
import gift from "../public/img/gift.png";
import gift2 from "../public/img/gift2.png";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [occassion, setOccassion] = useState("");
  const [additional, setAdditional] = useState("");

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const relationRef = useRef(null);
  const occassionRef = useRef(null);
  const additionalRef = useRef(null);

  const checkName = (name) => {
    const exp = /^[a-zA-Z ]{2,30}$/;
    return exp.test(name);
  };
  const checkAge = (age) => {
    return age !== "";
  };
  const checkGender = (gender) => {
    return gender !== "";
  };
  const checkRelationship = (relationship) => {
    return relationship !== "";
  };
  const checkOccassion = (occassion) => {
    return occassion !== "";
  };

  const validate = (name, age, gender, relationship, occassion) => {
    if (!checkName(name)) {
      nameRef.current.classList.add("show");
    } else {
      nameRef.current.classList.remove("show");
    }
    if (!checkAge(age)) {
      ageRef.current.classList.add("show");
    } else {
      ageRef.current.classList.remove("show");
    }
    if (!checkGender(gender)) {
      console.log(gender);
      genderRef.current.classList.add("show");
    } else {
      genderRef.current.classList.remove("show");
    }
    if (!checkRelationship(relationship)) {
      console.log(relationship);
      relationRef.current.classList.add("show");
    } else {
      relationRef.current.classList.remove("show");
    }
    if (!checkOccassion(occassion)) {
      occassionRef.current.classList.add("show");
    } else {
      occassionRef.current.classList.remove("show");
    }

    if (
      checkName(name) &&
      checkAge(age) &&
      checkGender(gender) &&
      checkRelationship(relationship) &&
      checkOccassion(occassion)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(name, age, gender, relationship, occassion);
    if (valid) {
      const dataJson = JSON.parse(
        JSON.stringify({
          name,
          age,
          gender,
          relationship,
          occassion,
          additional,
        })
      );
      console.log(dataJson);
    }
  };

  useEffect(() => {
    console.log(gender, relationship);
  }, [gender, relationship]);

  return (
    <main>
      <div className="container">
        <Image
          src={gift}
          alt="A white box with yellow ribbon"
          className="top-right-img"
        />
        <Image
          src={gift2}
          alt="Four colorful boxes with different color ribbons"
          className="bottom-right-img"
        />
        <div className="container__left">
          <Image
            src={coverImg}
            alt="a brown teddy in hot air balloon of red heart with a text of Valentine's Day"
          />
        </div>
        <div className="container__right">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <small ref={nameRef}>*Invalid input</small>
            </div>
            <div>
              <input
                type="number"
                className="input"
                placeholder="Age"
                min={0}
                onChange={(e) => setAge(e.target.value)}
              />
              <small ref={ageRef}>*Invalid input</small>
            </div>
            <div>
              <select
                name="gender"
                id="gender"
                className="input"
                onChange={(e) => setGender(e.target.value)}
                defaultValue="Male"
              >
                <option value="" selected disabled hidden>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <small ref={genderRef}>*Invalid input</small>
            </div>
            <div>
              <select
                name="relation"
                id="relation"
                className="input"
                defaultValue="Female"
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  Relation
                </option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Friend">Friend</option>
                <option value="GirlFriend">GirlFriend</option>
                <option value="Boyfriend">Boyfriend</option>
              </select>
              <small ref={relationRef}>*Invalid input</small>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Occassion"
                onChange={(e) => setOccassion(e.target.value)}
              />
              <small ref={occassionRef}>*Invalid input</small>
            </div>
            <div>
              <textarea
                name="additional"
                id="additional"
                rows="5"
                className="input"
                placeholder="Additional"
                onChange={(e) => setAdditional(e.target.value)}
              ></textarea>
              <small ref={additionalRef}>*Invalid input</small>
            </div>
            <button type="submit" className="btn">
              Search Gift
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
