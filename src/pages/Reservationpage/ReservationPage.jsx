import style from "./reservation.module.scss";
export const ReservationPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleReset = () => {
    document.getElementById("reservationForm").reset();
  }

  return (
    <div className={style.resContainer}>
      <h1> Reservation </h1>
      <p>Ufyld nedenstående formular for at reservere et af vores værelser</p>
      <form onSubmit={handleSubmit}>
        <select id="destination" name="destination">
          <option value="Danmark" required>
            Vælg destination og hotel
          </option>
          <option value="Danmark" required>
            Danmark
          </option>
          <option value="Danmark" required>
            Danmark
          </option>
        </select>

        <select id="type" name="type">
          <option value="type" required>
            Vælg værelsestype
          </option>
        </select>

        <select id="personer" name="personer">
          <option value="personer" required>
            Vælg antal personer
          </option>
        </select>
        <p>Vælg en Prisklasse</p>
        <label for="normal">Normal</label>
        <input type="radio" id="normal" name="normal" value="normal" checked />

        <label for="flex">Flex</label>
        <input type="radio" id="flex" name="normal" value="flex" />

        <label for="start">Start date:</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          value="2023-07-22"
          min="2023-01-01"
          max="2024-12-31"
        />

        <label for="end">End date:</label>

        <input
          type="date"
          id="end"
          name="trip-end"
          value="2023-07-22"
          min="2023-01-01"
          max="2024-12-31"
          
        />

        <input type="name" id="name" name="name" placeholder="Fornavn" />
        <input
          type="lastname"
          id="lastname"
          name="lastname"
          placeholder="Efternavn"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
        ></input>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Telefonnummer"
        ></input>
        <label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Kommentar"
          ></textarea>
        </label>
        <button type="submit">Send reservation</button>
        <button type="button" onClick={handleReset}>
          Annuller
        </button>
      </form>
    </div>
  );
};
