import { useState } from "react";

interface ColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

const colors = [
  { value: "#FD7941" },
  { value: "#F4BE40" },
  { value: "#5ECC89" },
  { value: "#348DE4" },
  { value: "#985DF6" },
  { value: "#B8B8B8" }
];

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onChange }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  const handleChange = (color: string) => {
    const index = colors.findIndex(c => c.value === color)
    setCurrentColorIndex(index);
    onChange(color);
  }
  return (
    <div className="form-group">
      <label>Cor do Evento:</label>
      <div style={{display: "flex", gap: '1rem'}}>
        {colors.map((color, index) => (
          <label key={color.value} htmlFor={color.value}>
            <input
              style={{ display: 'none' }}
              type="radio"
              id={color.value}
              name="color"
              value={color.value}
              checked={selectedColor === color.value}
              onChange={() => handleChange(color.value)}
            />
            <div style={index === currentColorIndex ? { border: '2px solid white' } : { border: 'none' }}>
              <div style={{backgroundColor: color.value, width: '2rem', height: '2rem'}}></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
