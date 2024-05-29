function calculateScore() {
  let score = 0;

  // سؤال 1
  const age = document.querySelector('input[name="age"]:checked');
  if (age) {
    score += parseInt(age.value);
  }

  // سؤال 2
  const gender = document.querySelector('input[name="gender"]:checked');
  if (gender) {
    score += parseInt(gender.value);
  }

  // سؤال 4
  const familyHistory = document.querySelector('input[name="family_history"]:checked');
  if (familyHistory) {
    score += parseInt(familyHistory.value);
  }

  // سؤال 5
  const highBloodSugar = document.querySelector('input[name="high_blood_sugar"]:checked');
  if (highBloodSugar) {
    score += parseInt(highBloodSugar.value);
  }

  // سؤال 6
  const exercise = document.querySelector('input[name="exercise"]:checked');
  if (exercise) {
    score += parseInt(exercise.value);
  }

  // سؤال 7: حساب BMI
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  if (height && weight) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi < 18.5) {
      score += 0; // وزن ناقص
    } else if (bmi < 24.9) {
      score += 1; // وزن طبيعي
    } else if (bmi < 29.9) {
      score += 2; // وزن زائد
    } else {
      score += 3; // سمنة
    }
  }

  let message = "مجموع النقاط: " + score;
  if (score >= 5) {
    message += "\nنصيحة: لديك خطر مرتفع للإصابة بالسكري. يُنصح بزيارة الطبيب وإجراء الفحوصات اللازمة.";
  } else {
    message += "\nنصيحة: لديك خطر منخفض للإصابة بالسكري. حافظ على نمط حياة صحي.";
  }

  // عرض النتيجة في الصفحة
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = message;

  // عرض النتيجة في نافذة تنبيه
  alert(message);
}

function togglePregnancyQuestion() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const pregnancyQuestion = document.getElementById('pregnancy_question');
  if (gender && gender.value == "1") {
    pregnancyQuestion.style.display = 'none';
  } else {
    pregnancyQuestion.style.display = 'block';
  }
}
