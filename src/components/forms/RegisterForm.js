// import React from "react";

// const RegisterForm = () => {
//   return (
//     <div>
//       <h2>Форма регистрации</h2>
//       <p>Здесь будет форма регистрации</p>
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Подтвердите пароль";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Временная заглушка - здесь будет вызов API
      console.log("Регистрация:", formData);
      alert("Регистрация успешна! (Это временное сообщение)");

      // Сброс формы после успешной регистрации
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      alert("Ошибка регистрации: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-form">
      <div className="register-form__container">
        <h2 className="register-form__title">Регистрация</h2>

        <form onSubmit={handleSubmit} className="register-form__form">
          {/* Поле Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "error" : ""}`}
              placeholder="Email"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Поля паролей в ряд */}
          <div className="password-row">
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Пароль"
                disabled={isSubmitting}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Повторите пароль
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${
                  errors.confirmPassword ? "error" : ""
                }`}
                placeholder="Повторите пароль"
                disabled={isSubmitting}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          {/* Кнопка регистрации */}
          <button
            type="submit"
            className="register-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
