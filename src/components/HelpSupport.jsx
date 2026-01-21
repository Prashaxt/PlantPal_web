import React, { useState } from 'react';
import { ChevronDown, Mail, MessageCircle, Book, Wifi, Droplet, Thermometer, Smartphone } from 'lucide-react';
import './HelpSupport.css';

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      icon: Book,
      questions: [
        {
          q: "How do I set up my PlantPal device?",
          a: "Download the PlantPal app, create an account, and follow the in-app setup wizard. Make sure your device is powered on and your phone's Wi-Fi is enabled. The app will guide you through connecting to WiFi and calibrating the sensors."
        },
        {
          q: "What WiFi networks does PlantPal support?",
          a: "PlantPal supports 2.4GHz WiFi networks with WPA2 security. It also does support 5GHz networks or enterprise WiFi with complex authentication."
        },
        {
          q: "How deep should I insert the soil sensor?",
          a: "Insert the moisture sensor 3-4 inches into the soil near your plant's roots. Avoid touching the roots directly and ensure the sensor is stable in the soil."
        }
      ]
    },
    {
      category: "Connectivity",
      icon: Wifi,
      questions: [
        {
          q: "My PlantPal won't connect to WiFi. What should I do?",
          a: "First, ensure you're using a WiFi network. Try moving the device closer to your router, restarting both the device and router, and re-entering your WiFi password in the app. Check that your network doesn't have MAC address filtering enabled."
        },
        {
          q: "Can I control PlantPal when I'm away from home?",
          a: "Yes! Once connected to WiFi, you can monitor and control your PlantPal from anywhere using the mobile app, as long as your device has an internet connection."
        },
        {
          q: "The app says my device is offline. How do I fix this?",
          a: "Check that your PlantPal is powered on and the LED indicator is lit. Verify your WiFi is working properly. Try restarting the device by unplugging it for 10 seconds, then plugging it back in."
        }
      ]
    },
    {
      category: "Watering System",
      icon: Droplet,
      questions: [
        {
          q: "How do I set up automatic watering schedules?",
          a: "Open the PlantPal app, go to your device settings, and tap 'Auto Water'. You can create schedules based on time or soil moisture levels. We recommend moisture-based watering for best plant health."
        },
        {
          q: "The pump isn't working. What should I check?",
          a: "Ensure the water reservoir has enough water and the pump tube is properly connected. Check that the pump power connection is secure. Try running a manual watering test from the app. If issues persist, contact support."
        },
        {
          q: "How much water does the system dispense per watering cycle?",
          a: "Each watering cycle dispenses approximately 10 seconds of water by default. You can adjust this in the app settings from 5 seconds to 30 seconds depending on your plant's needs."
        }
      ]
    },
    {
      category: "Sensors & Monitoring",
      icon: Thermometer,
      questions: [
        {
          q: "How often does PlantPal update sensor readings?",
          a: "PlantPal updates soil moisture, temperature, and humidity readings every 2 hours when the app is closed , and every second when the app is opened."
        },
        {
          q: "The sensor readings seem inaccurate. What should I do?",
          a: "Try recalibrating the sensors in the app settings. Ensure the moisture sensor is properly inserted in soil and not touching the pot sides. Clean the sensor probes gently with a soft cloth if there's mineral buildup."
        },
        {
          q: "What is the ideal moisture level for my plant?",
          a: "This varies by plant type. The app includes a plant database with recommended ranges. Generally, most houseplants prefer 40-60% soil moisture. Succulents prefer 20-40%, while tropical plants may prefer 60-80%."
        }
      ]
    },
    {
      category: "App & Account",
      icon: Smartphone,
      questions: [
        {
          q: "Can I monitor multiple PlantPal devices in one app?",
          a: "Yes! You can add unlimited PlantPal devices to your account and monitor all your plants from a single app. Each device can be named and customized separately."
        },
        {
          q: "I forgot my password. How do I reset it?",
          a: "On the login screen, tap 'Forgot Password' and enter your email address. You'll receive a password reset link within a few minutes. Check your spam folder if you don't see it."
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="help-support-container">
      <div className="help-support-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">Help & Support</h1>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <div className="faq-categories">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <div className="category-header">
                  <category.icon className="category-icon" />
                  <h3 className="category-title">{category.category}</h3>
                </div>
                
                <div className="questions-list">
                  {category.questions.map((item, qIndex) => {
                    const index = `${categoryIndex}-${qIndex}`;
                    const isOpen = openFaq === index;
                    
                    return (
                      <div key={qIndex} className="faq-item">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="faq-question"
                        >
                          <span className="question-text">{item.q}</span>
                          <ChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}