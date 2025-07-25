import Button from "../components/Button";
import { useState } from "react";

interface FormData {
  fullName: string;
  phone: string;
  peopleCount: number;
  street: string;
  city: string;
  district: string;
  category: string;
}

const RequestForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    peopleCount: 1,
    street: "",
    city: "",
    district: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "peopleCount" ? Number(value) : value,
    });
  };

  const districts = ["צפון", "דרום", "מרכז", "ירושלים"];
  const categories = [
    "מזון",
    "תרופות",
    "ביגוד",
    "ציוד רפואי",
    "שירותים כלליים",
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div dir="rtl" className="form-container">
      <header className="form-header">
        <h1>טופס בקשת סיוע</h1>
      </header>

      {step === 1 && (
        <div className="form-step">
          <h2>מי צריך עזרה?</h2>
          <input
            type="text"
            name="fullName"
            placeholder="שם מלא"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="מספר טלפון"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="peopleCount"
            placeholder="כמות"
            min={1}
            value={formData.peopleCount}
            onChange={handleChange}
          />
          <p className="form-note">
            כתבו שם שיאפשר לנו לזהות את הבקשה. זה יכול להיות "משפחת ישראלי" או
            "קבוצת דיירי רח' החרוב"...
          </p>
          <Button onClick={nextStep} type={"primary"} btnText={"השלב הבא ←"} />
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>לאיפה להגיע?</h2>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">בחר מחוז</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="city"
            placeholder="עיר"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="street"
            placeholder="רחוב"
            value={formData.street}
            onChange={handleChange}
          />

          <p className="form-note">
            אנחנו עובדים עם מחוזות פיקוד העורף. מיקום מדויק מאפשר לנו לשלוח את
            הבקשה למח"ל הקרוב.
          </p>

          <Button onClick={prevStep} btnText={"➝ חזור"} type={"secondary"} />
          <Button onClick={nextStep} type={"primary"} btnText={"השלב הבא ←"} />
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>לאיפה להגיע?</h2>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">בחר קטגוריה</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <p className="form-note">
            בחירה של קטגוריה עוזרת לנו להפנות את הבקשה לגורמים הנכונים.
          </p>

          <Button onClick={prevStep} btnText={"➝ חזור"} type={"secondary"} />
          <Button onClick={nextStep} type={"primary"} btnText={"השלב הבא ←"} />

          <Button
            btnText={"הגש בקשה"}
            type={"primary"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RequestForm;
